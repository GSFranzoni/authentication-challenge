<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Controller;
use Inertia\Response;

class RegisterController extends Controller
{
    public function index(): Response
    {
        return inertia('Auth/Register');
    }

    /**
     * @param RegisterRequest $request
     * @return RedirectResponse
     */
    public function register(RegisterRequest $request): RedirectResponse
    {
        $credentials = $request->only('name', 'email', 'password');

        User::firstOrCreate($credentials);

        if (auth()->attempt($credentials)) {
            return redirect()->route('home.index');
        }

        return redirect()->back()->withErrors([
            'email' => __('auth.failed'),
        ]);
    }
}
