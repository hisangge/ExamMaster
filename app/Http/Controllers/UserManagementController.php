<?php

namespace App\Http\Controllers;

use App\Models\UserManagement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response 
    {
        return Inertia::render('Usermanagement/Index', [

            //

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserManagement $userManagement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserManagement $userManagement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserManagement $userManagement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserManagement $userManagement)
    {
        //
    }
}
