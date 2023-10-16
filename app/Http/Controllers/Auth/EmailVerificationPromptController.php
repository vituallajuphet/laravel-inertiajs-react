<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Traits\Utils;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    use Utils;
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): RedirectResponse|Response
    {

        $intendedRoute = Auth::user()->role->role_type.'/dashboard';
        return $request->user()->hasVerifiedEmail()
                    ? $this->intendedRoute()
                    : Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
    }
}
