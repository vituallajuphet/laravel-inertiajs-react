<?php

namespace App\Traits;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Image;

use function PHPUnit\Framework\isEmpty;

trait FileChecker {
    
    protected function UploadFile ($path= '', bool $createable = false, array $files = [], $dataType ='')
    {


        if(count($files) < 1){
            return array("message" => "Image is required13", 'error' => true);
        }


        $year = date('Y');
        $month = date('m');
        $publicPath = 'storage/';

        
        $yearPath = !isEmpty($path) ? $path : public_path($publicPath.$year);

        $yearPathExists = is_dir($yearPath);

        if(!$yearPathExists){
            File::makeDirectory($yearPath, 0777, true, true);
        }

        if(isEmpty($path)) {
            $monthPath = !empty($path) ? $path : $yearPath.'/'.$month;

            $monthPathExists = is_dir($monthPath);

            if(!$monthPathExists){
                File::makeDirectory($monthPath, 0777, true, true);
            }
        }

        $fullpath = !isEmpty($path) ? $path : $yearPath.'/'.$month;
        $passed = count($files) > 0;

        foreach($files as $file) {
            $rules = array('file' => 'required|mimes:png,gif,jpeg'); //'required|mimes:png,gif,jpeg,txt,pdf,doc'
            $validator = Validator::make(array('file'=> $file), $rules, ['required' => 'image is requred4']);
    
            if(!$validator->passes()){
                $passed = false;
                return array("message" => "Image is required1", 'error' => true);
                break;
            }
        }

        $productImages= [];

        if($passed) {
            foreach($files as $file) {
                $input['file'] = Str::random(10).time().'.'.$file->getClientOriginalExtension();


                $imgFile = Image::make($file->getRealPath());
                $imgFile->resize(250, 250, function ($constraint) {
                    $constraint->aspectRatio();
                })->save($fullpath.'/'.$input['file']);

                $productImages = [...$productImages, ['product_name' => $input['file']]];
            }
            return array("message" => "success", 'error' => false);
        }
        
        return array("message" => "Image is required 2", 'error' => true);

    }
    
}