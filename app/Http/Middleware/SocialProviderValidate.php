<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\Middleware;

class SocialProviderValidate extends Middleware
{
    /**
     * @param Request $request
     * @param $next
     * @param $provider
     * @return mixed
     */
    public function handle(Request $request, $next, $provider): mixed
    {
        if (!in_array($provider, config('services.socialite.providers'), true)) {
            return redirect()
                ->with('error', __('auth.socialite.invalid'))
                ->route('auth.login.index');
        }
        return $next($request);
    }
}
