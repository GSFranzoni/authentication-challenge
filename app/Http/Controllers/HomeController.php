<?php

namespace App\Http\Controllers;

use Inertia\Controller;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return inertia('Home');
    }
}
