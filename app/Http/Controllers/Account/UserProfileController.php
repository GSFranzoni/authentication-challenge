<?php

namespace App\Http\Controllers\Account;

use Illuminate\Routing\Controller;
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
}
