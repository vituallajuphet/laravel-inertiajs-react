<?php

namespace App\Http\Controllers\SellerAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    //
    public function create(): Response
    {
        return Inertia::render('Seller/Auth/Login');
    }
}
