<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    protected $table = 'manage_guru';
    protected $fillable = [
        'id',
        'nama_guru',
    ];
    public function kelas()
    {
        return $this->belongsToMany(Kelas::class, 'pivot_guru_kelas', 'guru_id', 'kelas_id');
    }
}
