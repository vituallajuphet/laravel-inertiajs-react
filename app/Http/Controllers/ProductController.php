<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'integer',
        ]);

        Product::create([   
            'product_id' => fake()->unique()->uuid(),
            'product_name' => $request->product_name,
            'price' => $request->price,
            'store_id' => '00767690-0d0a-3051-bfbd-3988a4f00644',
            'status'=> '1'
        ]);

        return redirect()->back();
    }

    /**
     * Update the user's profile information.
     */
}
