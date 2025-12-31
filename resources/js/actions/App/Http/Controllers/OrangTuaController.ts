import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/orangtua',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrangTuaController::index
 * @see app/Http/Controllers/OrangTuaController.php:14
 * @route '/orangtua'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\OrangTuaController::store
 * @see app/Http/Controllers/OrangTuaController.php:31
 * @route '/orangtua'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/orangtua',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OrangTuaController::store
 * @see app/Http/Controllers/OrangTuaController.php:31
 * @route '/orangtua'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrangTuaController::store
 * @see app/Http/Controllers/OrangTuaController.php:31
 * @route '/orangtua'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\OrangTuaController::store
 * @see app/Http/Controllers/OrangTuaController.php:31
 * @route '/orangtua'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\OrangTuaController::store
 * @see app/Http/Controllers/OrangTuaController.php:31
 * @route '/orangtua'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\OrangTuaController::update
 * @see app/Http/Controllers/OrangTuaController.php:57
 * @route '/orangtua/{orangTua}'
 */
export const update = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/orangtua/{orangTua}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\OrangTuaController::update
 * @see app/Http/Controllers/OrangTuaController.php:57
 * @route '/orangtua/{orangTua}'
 */
update.url = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { orangTua: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { orangTua: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    orangTua: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        orangTua: typeof args.orangTua === 'object'
                ? args.orangTua.id
                : args.orangTua,
                }

    return update.definition.url
            .replace('{orangTua}', parsedArgs.orangTua.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrangTuaController::update
 * @see app/Http/Controllers/OrangTuaController.php:57
 * @route '/orangtua/{orangTua}'
 */
update.put = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\OrangTuaController::update
 * @see app/Http/Controllers/OrangTuaController.php:57
 * @route '/orangtua/{orangTua}'
 */
    const updateForm = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\OrangTuaController::update
 * @see app/Http/Controllers/OrangTuaController.php:57
 * @route '/orangtua/{orangTua}'
 */
        updateForm.put = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\OrangTuaController::destroy
 * @see app/Http/Controllers/OrangTuaController.php:66
 * @route '/orangtua/{orangTua}'
 */
export const destroy = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/orangtua/{orangTua}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\OrangTuaController::destroy
 * @see app/Http/Controllers/OrangTuaController.php:66
 * @route '/orangtua/{orangTua}'
 */
destroy.url = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { orangTua: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { orangTua: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    orangTua: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        orangTua: typeof args.orangTua === 'object'
                ? args.orangTua.id
                : args.orangTua,
                }

    return destroy.definition.url
            .replace('{orangTua}', parsedArgs.orangTua.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrangTuaController::destroy
 * @see app/Http/Controllers/OrangTuaController.php:66
 * @route '/orangtua/{orangTua}'
 */
destroy.delete = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\OrangTuaController::destroy
 * @see app/Http/Controllers/OrangTuaController.php:66
 * @route '/orangtua/{orangTua}'
 */
    const destroyForm = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\OrangTuaController::destroy
 * @see app/Http/Controllers/OrangTuaController.php:66
 * @route '/orangtua/{orangTua}'
 */
        destroyForm.delete = (args: { orangTua: number | { id: number } } | [orangTua: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const OrangTuaController = { index, store, update, destroy }

export default OrangTuaController