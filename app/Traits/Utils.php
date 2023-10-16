<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;
use function PHPUnit\Framework\isEmpty;

trait Utils {
    
    protected function intendedRoute($route = '')
    {
        $HOME = '/dashboard';
        $intendedRoute = !isEmpty($route) ? $route : Auth::user()->role->role_type.$HOME;
        return redirect()->intended($intendedRoute);
    }

    protected function getIntendedRoute () {
        return Auth::user()->role->role_type.'/dashboard';
    }

}