<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;
use function PHPUnit\Framework\isEmpty;

trait Utils {
    
    protected function intendedRoute($route = '')
    {
        $HOME = '/dashboard';

        $userType = Auth::user()->role->role_name === 'seller' ? 'merchant' : Auth::user()->role->role_name;

        $intendedRoute = !isEmpty($route) ? $route : $userType.$HOME;
        return redirect()->intended($intendedRoute);
    }

    protected function getIntendedRoute () {
        return Auth::user()->role->role_name.'/dashboard';
    }

}