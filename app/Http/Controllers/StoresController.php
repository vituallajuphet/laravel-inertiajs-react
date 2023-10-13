<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Product;
use App\Models\Stores;
use App\Traits\HttpResponses;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StoresController extends Controller
{
    use HttpResponses;
    public function index() {
        $data = Stores::paginate(15)->through(function ($item) {
            return [
                'store_id' => $item->store_id,
                'name' => $item->store_name,
                'nickname' => $item->store_nickname,
                // etc
            ];
        });
        
        return Inertia::render('Store/Stores', [
           'data' =>  $data
        ]);
        
    }

    public function show (Request $request, $store_id) {
        $store = Stores::query()->where('store_id', $store_id)->firstOrFail();
        $products = Product::query()->where('store_id', $store_id)->get();
        return Inertia::render('Store/Store', [
            'store' =>  $store,
            'products' => $products,
            'url' => $request->getSchemeAndHttpHost()
        ]);
    }

    public function show_product (Request $request, $store_id, $product_id) {
        $product = Product::query()->where(['store_id'=>$store_id, 'product_id'=>$product_id])->get();
        return Inertia::render('Product/Product', [
            'product' => $product,
            'url' => $request->getSchemeAndHttpHost()
        ]);
    }
    

    public function api_all () {
        $stores = Stores::all();

        return $this->success([
            'stores' => $stores,
        ], 'successful');
    }


    public function destroy(Request $request, $uuid ) {
         Stores::query()->where('uuid', $uuid)->delete();
        return Redirect::route('store.index');
    }
}
