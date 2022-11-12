<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Controller;
use Inertia\Response;

class LoginController extends Controller
{
    public function index(): Response
    {
        return inertia('Auth/Login');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            return redirect()->route('home.index');
        }

        return redirect()->back()->withErrors([
            'email' => __('auth.failed'),
        ]);
    }
}
