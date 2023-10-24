<?php

namespace App\Http\Middleware;

use App\Models\Stores;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class hasStoreMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $user = Auth::user();
        $is_seller = $user->role->role_name === 'seller';
        
        $has_store =  !empty($is_seller) ?  Stores::query()->where('user_id', $user->user_id )->count() : null;

        if(!Auth::check() || !$is_seller) {
            abort(403);
        }

        elseif($is_seller && $has_store === 0) {
            return redirect('merchant/registerstore');
        }

        return $next($request);
    }
}
