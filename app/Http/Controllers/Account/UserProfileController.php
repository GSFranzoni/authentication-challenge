<?php

namespace App\Http\Controllers\Account;

use App\Http\Requests\Account\UserProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use Inertia\ResponseFactory;

class UserProfileController extends Controller
{
    /**
     * @return Response|ResponseFactory
     */
    public function index(): Response|ResponseFactory
    {
        return inertia('Account/UserProfile');
    }

    /**
     * @return Response|ResponseFactory
     */
    public function edit(): Response|ResponseFactory
    {
        return inertia('Account/UserProfileEdit');
    }

    /**
     * @param UserProfileUpdateRequest $request
     * @return RedirectResponse
     */
    public function update(UserProfileUpdateRequest $request): RedirectResponse
    {
        /** @var User $user */
        $user = Auth::user();
        if ($user?->update($request->validated())) {
            return redirect()->route('account.profile.index');
        }
        return redirect()
            ->back()
            ->withErrors([
                'name' => __('account.profile.update.failed'),
            ]);
    }
}
