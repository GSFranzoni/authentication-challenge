<?php

namespace App\Http\Requests\Account;

use Illuminate\Foundation\Http\FormRequest;

class UserProfileUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'password' => 'required|string|min:8',
            'name' => 'required|string|max:255',
            'avatar' => 'required|url',
            'bio' => 'required|string|max:255',
            'phone' => 'required:phone',
        ];
    }
}
