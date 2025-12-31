<?php

namespace App\Http\Controllers;

use App\Models\OrangTua;
use App\Http\Requests\StoreOrangTuaRequest;
use App\Http\Requests\UpdateOrangTuaRequest;

class OrangTuaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ortu = OrangTua::all();
        return inertia("Orangtua/Index", compact('ortu'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Orangtua/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrangTuaRequest $request)
    {
        Orangtua::create($request->validated());
        return inertia()->location("/orangtua");
    }

    /**
     * Display the specified resource.
     */
    public function show(OrangTua $orangTua)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrangTua $orangTua)
    {
                
        // return inertia()->location('/siswa');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrangTuaRequest $request, OrangTua $orangTua)
    {
        $orangTua->update($request->validated());
        return inertia()->location("/orangtua");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrangTua $orangTua)
    {
        $orangTua->delete();
        return inertia()->location("/orangtua");
    }
}
