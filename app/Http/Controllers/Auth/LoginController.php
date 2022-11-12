<?php

namespace App\Http\Controllers\Auth;

use Inertia\Controller;
use Inertia\Response;

class LoginController extends Controller
{
    public function index(): Response
    {
        return inertia('Login');
    }
}
