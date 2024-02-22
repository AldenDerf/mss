<?php
    namespace App\Http\Controllers;

    use App\Models\Patient;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Inertia\Inertia;

    class PatientSearchController extends Controller
    {
        public function index(Request $request)
        {
            // Authentication check (remains unchanged)
            if (!Auth::check()) {
                return redirect()->route('login');
            }

            $searchTerm = $request->input('search');

            $patients = Patient::where('hpercode', 'LIKE', "%{$searchTerm}%")
                ->orWhere('patlast', 'LIKE', "%{$searchTerm}%")
                ->orWhere('patfirst', 'LIKE', "%{$searchTerm}%")
                ->orWhere('patmiddle', 'LIKE', "%{$searchTerm}%")
                ->orWhereRaw("CONVERT(VARCHAR, patbdate, 101)LIKE '%{$searchTerm}%'")
                ->get();

            return Inertia::render('PatientSearchResults', [
                'patients' => $patients
            ]);
        }
    }

