import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:11
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:11
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:11
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:11
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:11
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:11
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:11
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
export const siswa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: siswa.url(options),
    method: 'get',
})

siswa.definition = {
    methods: ["get","head"],
    url: '/siswa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
siswa.url = (options?: RouteQueryOptions) => {
    return siswa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
siswa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: siswa.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
siswa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: siswa.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
    const siswaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: siswa.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
        siswaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: siswa.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SiswaController::siswa
 * @see app/Http/Controllers/SiswaController.php:16
 * @route '/siswa'
 */
        siswaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: siswa.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    siswa.form = siswaForm
/**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
export const kelas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kelas.url(options),
    method: 'get',
})

kelas.definition = {
    methods: ["get","head"],
    url: '/kelas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
kelas.url = (options?: RouteQueryOptions) => {
    return kelas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
kelas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kelas.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
kelas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kelas.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
    const kelasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: kelas.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
        kelasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kelas.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KelasController::kelas
 * @see app/Http/Controllers/KelasController.php:14
 * @route '/kelas'
 */
        kelasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kelas.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    kelas.form = kelasForm
/**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
export const guru = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guru.url(options),
    method: 'get',
})

guru.definition = {
    methods: ["get","head"],
    url: '/guru',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
guru.url = (options?: RouteQueryOptions) => {
    return guru.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
guru.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guru.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
guru.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: guru.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
    const guruForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: guru.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
        guruForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: guru.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuruController::guru
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
        guruForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: guru.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    guru.form = guruForm
/**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
export const orangtua = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: orangtua.url(options),
    method: 'get',
})

orangtua.definition = {
    methods: ["get","head"],
    url: '/orangtua',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
orangtua.url = (options?: RouteQueryOptions) => {
    return orangtua.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
orangtua.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: orangtua.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
orangtua.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: orangtua.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
    const orangtuaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: orangtua.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
        orangtuaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: orangtua.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrangTuaController::orangtua
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
        orangtuaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: orangtua.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    orangtua.form = orangtuaForm
/**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:38
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm