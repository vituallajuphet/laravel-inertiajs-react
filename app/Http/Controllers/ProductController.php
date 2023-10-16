<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Traits\FileChecker;
use App\Traits\HttpResponses;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Image;

class ProductController extends Controller
{
    use HttpResponses, FileChecker;
    /**
     * Display the user's profile form.
     */
    public function store(Request $request): RedirectResponse
    {

        
        $files = $request->file('files');
        $passed = count($files) > 0;

        $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required',
         ]);


        $upload = $this->UploadFile('', true, $files);


        // if($this->UploadFile('', true, $files)) {
        //     return redirect()->back()->with($upload); 
        // }

    //    foreach($files as $file) {
    //         $rules = array('file' => 'required|mimes:png,gif,jpeg'); //'required|mimes:png,gif,jpeg,txt,pdf,doc'
    //         $validator = Validator::make(array('file'=> $file), $rules, ['required' => 'image is requred']);
       
    //         if(!$validator->passes()){
    //             $passed = false;
    //             //     $filename = $file->getClientOriginalName();
    //                 // $upload_success = $file->move($destinationPath, $filename);
    //             //     $uploadcount ++;
    //         }
    //     }

    //     $productImages= [];

    //     if($passed) {
    //         foreach($files as $file) {
    //             $input['file'] = Str::random(10).time().'.'.$file->getClientOriginalExtension();
    //             $destinationPath = public_path('storage/thumbnails');

    //             $folderExist = is_dir($destinationPath);

    //             if(!$folderExist){
    //                 File::makeDirectory($destinationPath, 0777, true, true);
    //             }

    //             $imgFile = Image::make($file->getRealPath());
    //             $imgFile->resize(250, 250, function ($constraint) {
    //                 $constraint->aspectRatio();
    //             })->save($destinationPath.'/'.$input['file']);

    //             $productImages = [...$productImages, ['product_name' => $input['file']]];
    //         }
    //     }

        Product::create([   
            'product_id' => fake()->unique()->uuid(),
            'product_name' => $request->product_name,
            'price' => $request->price,
            'store_id' => $request->store_id,
            'product_images' => json_encode($productImages),
            'status'=> '1',
        ]);

        return redirect()->back();
    }


    public function api_show (Request $request=null, $store_id) {
        $products = Product::query()->where('store_id', $store_id)->get();

        return $this->success([
            'products' => $products,
        ], 'successful');
    }


    /**
     * Update the user's profile information.
     */
}
