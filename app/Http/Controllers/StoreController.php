<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Stores;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function index() {
        $data = Stores::all();
        
        return Inertia::render('Store/Stores', [
           'data' =>  $data
        ]);
        
    }

    public function destroy(Request $request, $uuid ) {
         Stores::query()->where('uuid', $uuid)->delete();
        return Redirect::route('store.index');
    }
}
