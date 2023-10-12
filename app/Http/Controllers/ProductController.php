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
            'store_id' => '00105e64-691b-358c-ba7b-0eee5298a4f8',
            'status'=> '1'
        ]);

        return redirect()->back();
    }

    /**
     * Update the user's profile information.
     */
}
