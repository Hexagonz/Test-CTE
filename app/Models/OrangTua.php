<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrangTua extends Model
{
    protected $table = "orang_tua";
    protected $fillable = [
        "id",
        "nama_ortu"
    ];

    public function siswa(){
        return $this->hasMany(Siswa::class, "siswa_id","id");
    }
}
