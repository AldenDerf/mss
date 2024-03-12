<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {

        //Validate and attempt login based on 'employee_id'
        if (!Auth::attempt($request->only('employee_id', 'password'), $request->boolean('remember'))) {
            throw ValidationException::withMessages([
                'employee_id' => trans('auth.failed'),
            ]);
        }

        //Fetch the authenticated user
        $user = Auth::user();

        $request->session()->regenerate();

        //Conditional Redirect + Inertia Response
        if ($request->wantsJson()) {
            return Inertia::render('Dashboard')
                ->with('user', $user)
                ->with('success', true);// Example: add a 'success' prop

        }else {
            return redirect()->intended(RouteServiceProvider::HOME);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
