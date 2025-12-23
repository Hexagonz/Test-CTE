<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kelas;
use App\Http\Requests\StoreGuruRequest;
use App\Http\Requests\UpdateGuruRequest;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $guru = Guru::with('kelas')->get();
        $kelas = Kelas::all();
        return inertia('Guru/Index', compact('guru', 'kelas'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Guru/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGuruRequest $request)
    {
        $guru = Guru::create($request->validated());
        $guru->kelas()->attach($request->kelas_id);
        return inertia()->location('/guru');
    }

    /**
     * Display the specified resource.
     */
    public function show(Guru $guru)
    {
        return inertia('Guru/Show', compact('guru'));   
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guru $guru)
    {
        return inertia('Guru/Edit', compact('guru'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGuruRequest $request, Guru $guru)
    {
        $guru->update($request->validated());
        $guru->kelas()->sync($request->kelas_id);
        return inertia()->location('/guru');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Guru $guru)
    {
        $guru->delete();
        return inertia()->location('/guru');
    }
}
