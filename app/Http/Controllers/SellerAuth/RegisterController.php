<?php

namespace App\Http\Controllers\SellerAuth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Rules\SellerTypeRule;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
use Inertia\Response;

class RegisterController extends Controller
{
    //

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Seller/Auth/Register');
    }

    public function store(Request $request) {

        
        $request->validate([
            'name' => 'required|string|max:255',
            'seller_type' => ['required', 'string' , 'max:255', new  SellerTypeRule],
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        dd($request);

        $user = User::create([
            'name' => ucfirst($request->name),
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);
        $role = $user->role ?: new Role();
        $role->role_type = 'seller';
        $user->role()->save($role);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    // public function store(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:'.User::class,
    //         'username' => 'required|string|max:255|unique:'.User::class,
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //     ]);

    //     $user = User::create([
    //         'name' => ucfirst($request->name),
    //         'email' => $request->email,
    //         'username' => $request->username,
    //         'password' => Hash::make($request->password),
    //     ]);
    //     $role = $user->role ?: new Role();
    //     $role->role_type = 'seller';
    //     $user->role()->save($role);

    //     event(new Registered($user));

    //     Auth::login($user);

    //     return redirect(RouteServiceProvider::HOME);
    // }
}
