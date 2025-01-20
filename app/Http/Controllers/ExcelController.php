<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ExportUser;
use App\Models\Profile;

class ExcelController extends Controller
{

    public function exportUsers(Request $request){
        return Excel::download(new ExportUser, 'users.xlsx');
    }
}