<?php

namespace App\Http\Controllers\Merchant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchantProductController extends Controller
{
    //
    public function create(){
        return Inertia::render('Seller/Authenticated/Product', []);
    }
}
