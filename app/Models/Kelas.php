<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    protected $table = 'manage_kelas';

    protected $fillable = [
        'id',
        'nama_kelas',
    ];

    public function siswa()
    {
        return $this->hasMany(Siswa::class, 'kelas_id'  );
    }

    public function guru()
    {
        return $this->belongsToMany(Guru::class, 'pivot_guru_kelas', 'kelas_id', 'guru_id');
    }
}
