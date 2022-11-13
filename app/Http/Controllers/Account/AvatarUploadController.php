<?php

namespace App\Http\Controllers\Account;

use App\Http\Requests\Account\AvatarUploadRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Controller;
use Inertia\Response;
use Inertia\ResponseFactory;
use Ramsey\Uuid\Uuid;

class AvatarUploadController extends Controller
{
    public function upload(AvatarUploadRequest $request): Response|ResponseFactory
    {
        $filename = Uuid::uuid1()->toString() . '.' . $request->file('file')?->extension();

        $path = $request->file('file')?->storeAs('files', $filename, [
            'disk' => 's3',
            'expires' => now()->addMinutes(5),
        ]);

        $url = Storage::disk('s3')->temporaryUrl($path, now()->addMinutes(5));

        return inertia('Account/UserProfileEdit', [
            'avatar' => $url,
        ]);
    }
}
