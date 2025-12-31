<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    protected $table = 'manage_siswa';

    protected $fillable = [
        'id',
        'nama_siswa',
        'kelas_id',
        'ortu_id'
    ];

    public function kelas()
    {
        return $this->belongsTo(Kelas::class, 'kelas_id','id');
    }

    public function ortu() 
    {
        return $this->belongsTo(OrangTua::class,"ortu_id","id");
    }
}
