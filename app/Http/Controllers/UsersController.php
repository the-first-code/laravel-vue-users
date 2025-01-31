<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(User::paginate(20)->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Supliers  $supliers
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $user = User::find($id);
        $user->{$request->paramName} = $request->param;
        $user->updated_at = new \DateTime();
        $user->save();

        return response(null, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supliers  $supliers
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $users = new User();
        $users->find($id)->delete();

        return response($users->paginate(20)->jsonSerialize(), Response::HTTP_OK);
    }
}
