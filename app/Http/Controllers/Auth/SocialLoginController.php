<?php

namespace App\Http\Controllers\Auth;

use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Controller;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Contracts\User as SocialUser;
use Ramsey\Uuid\Uuid;

class SocialLoginController extends Controller
{
    /**
     * @param Request $request
     * @param string $provider
     * @return RedirectResponse
     */
    public function redirect(Request $request, string $provider): RedirectResponse
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param Request $request
     * @param string $provider
     * @return RedirectResponse
     */
    public function callback(Request $request, string $provider): RedirectResponse
    {
        $socialUser = Socialite::driver($provider)->user();

        $user = $this->findOrCreateUser($socialUser, $provider);

        auth()->login($user);

        return redirect()->route('home.index');
    }

    /**
     * @param SocialUser $socialUser
     * @param string $provider
     * @return User
     */
    private function findOrCreateUser(SocialUser $socialUser, string $provider): User
    {
        $socialAccount = SocialAccount::firstOrNew([
            'provider' => $provider,
            'provider_user_id' => $socialUser->getId(),
        ]);

        if ($socialAccount->exists) {
            return $socialAccount->user;
        }

        $user = User::firstOrCreate([
            'email' => $socialUser->getEmail(),
        ], [
            'name' => $socialUser->getName(),
            'avatar' => $socialUser->getAvatar(),
            'password' => Uuid::uuid4()->toString(),
        ]);

        $socialAccount
            ->user()
            ->associate($user)
            ->save();

        return $user;
    }
}
