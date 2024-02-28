<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientSearchController extends Controller
{

    public function search(Request $request)
    {
        $query = Patient::query(); // Start with a base Eloquent query

        if ($request->hpercode) {
            $query->where('hpercode', 'LIKE', '%' . $request->hpercode . '%');
        }

        if ($request->patfirst) {
            $query->where('patfirst', 'LIKE', '%' . $request->patfirst . '%');
        }

        if ($request->patlast) {
            $query->where('patlast', 'LIKE', '%' . $request->patlast . '%');
        }

        if ($request->patdob) {
            //Ensure date format is compatible with your database storage
            $query->whereDate('patbdate', $request->patbdate);
        }

        $patients = $query->paginate(10);

        return Inertia('Search_Patient/SearchPatients', [
            'patients' => $patients,
            'searchInputs' => $request->all()
        ]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
