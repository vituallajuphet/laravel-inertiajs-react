<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Stores;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StoresController extends Controller
{
    public function index() {
        $data = Stores::paginate(15)->through(function ($item) {
            return [
                'id' => $item->uuid,
                'name' => $item->store_name,
                'nickname' => $item->store_nickname,
                // etc
            ];
        });
        
        return Inertia::render('Store/Stores', [
           'data' =>  $data
        ]);
        
    }

    public function show (Request $request, $uuid) {
        $store = Stores::query()->where('uuid', $uuid)->firstOrFail();
        return Inertia::render('Store/Store', [
            'store' =>  $store
         ]);

    }

    public function destroy(Request $request, $uuid ) {
         Stores::query()->where('uuid', $uuid)->delete();
        return Redirect::route('store.index');
    }
}
