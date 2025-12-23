import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SiswaController::store
 * @see app/Http/Controllers/SiswaController.php:33
 * @route '/siswa'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/siswa',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiswaController::store
 * @see app/Http/Controllers/SiswaController.php:33
 * @route '/siswa'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiswaController::store
 * @see app/Http/Controllers/SiswaController.php:33
 * @route '/siswa'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SiswaController::store
 * @see app/Http/Controllers/SiswaController.php:33
 * @route '/siswa'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SiswaController::store
 * @see app/Http/Controllers/SiswaController.php:33
 * @route '/siswa'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\SiswaController::update
 * @see app/Http/Controllers/SiswaController.php:58
 * @route '/siswa/{siswa}'
 */
export const update = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/siswa/{siswa}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SiswaController::update
 * @see app/Http/Controllers/SiswaController.php:58
 * @route '/siswa/{siswa}'
 */
update.url = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { siswa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { siswa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    siswa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        siswa: typeof args.siswa === 'object'
                ? args.siswa.id
                : args.siswa,
                }

    return update.definition.url
            .replace('{siswa}', parsedArgs.siswa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiswaController::update
 * @see app/Http/Controllers/SiswaController.php:58
 * @route '/siswa/{siswa}'
 */
update.put = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\SiswaController::update
 * @see app/Http/Controllers/SiswaController.php:58
 * @route '/siswa/{siswa}'
 */
    const updateForm = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SiswaController::update
 * @see app/Http/Controllers/SiswaController.php:58
 * @route '/siswa/{siswa}'
 */
        updateForm.put = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SiswaController::destroy
 * @see app/Http/Controllers/SiswaController.php:67
 * @route '/siswa/{siswa}'
 */
export const destroy = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/siswa/{siswa}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SiswaController::destroy
 * @see app/Http/Controllers/SiswaController.php:67
 * @route '/siswa/{siswa}'
 */
destroy.url = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { siswa: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { siswa: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    siswa: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        siswa: typeof args.siswa === 'object'
                ? args.siswa.id
                : args.siswa,
                }

    return destroy.definition.url
            .replace('{siswa}', parsedArgs.siswa.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiswaController::destroy
 * @see app/Http/Controllers/SiswaController.php:67
 * @route '/siswa/{siswa}'
 */
destroy.delete = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\SiswaController::destroy
 * @see app/Http/Controllers/SiswaController.php:67
 * @route '/siswa/{siswa}'
 */
    const destroyForm = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SiswaController::destroy
 * @see app/Http/Controllers/SiswaController.php:67
 * @route '/siswa/{siswa}'
 */
        destroyForm.delete = (args: { siswa: number | { id: number } } | [siswa: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const siswa = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default siswa