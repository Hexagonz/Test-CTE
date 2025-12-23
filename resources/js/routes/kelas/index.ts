import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\KelasController::store
 * @see app/Http/Controllers/KelasController.php:31
 * @route '/kelas'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/kelas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KelasController::store
 * @see app/Http/Controllers/KelasController.php:31
 * @route '/kelas'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::store
 * @see app/Http/Controllers/KelasController.php:31
 * @route '/kelas'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\KelasController::store
 * @see app/Http/Controllers/KelasController.php:31
 * @route '/kelas'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\KelasController::store
 * @see app/Http/Controllers/KelasController.php:31
 * @route '/kelas'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\KelasController::update
 * @see app/Http/Controllers/KelasController.php:56
 * @route '/kelas/{kelas}'
 */
export const update = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/kelas/{kelas}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\KelasController::update
 * @see app/Http/Controllers/KelasController.php:56
 * @route '/kelas/{kelas}'
 */
update.url = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kelas: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kelas: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kelas: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kelas: typeof args.kelas === 'object'
                ? args.kelas.id
                : args.kelas,
                }

    return update.definition.url
            .replace('{kelas}', parsedArgs.kelas.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::update
 * @see app/Http/Controllers/KelasController.php:56
 * @route '/kelas/{kelas}'
 */
update.put = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\KelasController::update
 * @see app/Http/Controllers/KelasController.php:56
 * @route '/kelas/{kelas}'
 */
    const updateForm = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\KelasController::update
 * @see app/Http/Controllers/KelasController.php:56
 * @route '/kelas/{kelas}'
 */
        updateForm.put = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\KelasController::destroy
 * @see app/Http/Controllers/KelasController.php:65
 * @route '/kelas/{kelas}'
 */
export const destroy = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/kelas/{kelas}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KelasController::destroy
 * @see app/Http/Controllers/KelasController.php:65
 * @route '/kelas/{kelas}'
 */
destroy.url = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kelas: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kelas: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kelas: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kelas: typeof args.kelas === 'object'
                ? args.kelas.id
                : args.kelas,
                }

    return destroy.definition.url
            .replace('{kelas}', parsedArgs.kelas.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KelasController::destroy
 * @see app/Http/Controllers/KelasController.php:65
 * @route '/kelas/{kelas}'
 */
destroy.delete = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\KelasController::destroy
 * @see app/Http/Controllers/KelasController.php:65
 * @route '/kelas/{kelas}'
 */
    const destroyForm = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\KelasController::destroy
 * @see app/Http/Controllers/KelasController.php:65
 * @route '/kelas/{kelas}'
 */
        destroyForm.delete = (args: { kelas: number | { id: number } } | [kelas: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const kelas = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default kelas