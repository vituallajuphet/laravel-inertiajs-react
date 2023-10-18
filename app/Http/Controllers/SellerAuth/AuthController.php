<?php

namespace App\Http\Controllers\SellerAuth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Traits\Utils;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    use Utils;
    //
    public function create(): Response
    {
        return Inertia::render('Seller/Auth/Login');
    }

    public function store (LoginRequest $request) {
        $request->authenticate();
        $request->session()->regenerate();

        return $this->intendedRoute();
    }

    public function destroy(Request $request): RedirectResponse {

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        return redirect('merchant/login');
    }
}
