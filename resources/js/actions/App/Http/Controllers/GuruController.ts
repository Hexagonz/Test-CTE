import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/guru',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuruController::index
 * @see app/Http/Controllers/GuruController.php:15
 * @route '/guru'
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
* @see \App\Http\Controllers\GuruController::store
 * @see app/Http/Controllers/GuruController.php:33
 * @route '/guru'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/guru',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuruController::store
 * @see app/Http/Controllers/GuruController.php:33
 * @route '/guru'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::store
 * @see app/Http/Controllers/GuruController.php:33
 * @route '/guru'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GuruController::store
 * @see app/Http/Controllers/GuruController.php:33
 * @route '/guru'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GuruController::store
 * @see app/Http/Controllers/GuruController.php:33
 * @route '/guru'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\GuruController::update
 * @see app/Http/Controllers/GuruController.php:59
 * @route '/guru/{guru}'
 */
export const update = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/guru/{guru}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\GuruController::update
 * @see app/Http/Controllers/GuruController.php:59
 * @route '/guru/{guru}'
 */
update.url = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guru: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { guru: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    guru: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        guru: typeof args.guru === 'object'
                ? args.guru.id
                : args.guru,
                }

    return update.definition.url
            .replace('{guru}', parsedArgs.guru.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::update
 * @see app/Http/Controllers/GuruController.php:59
 * @route '/guru/{guru}'
 */
update.put = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\GuruController::update
 * @see app/Http/Controllers/GuruController.php:59
 * @route '/guru/{guru}'
 */
    const updateForm = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GuruController::update
 * @see app/Http/Controllers/GuruController.php:59
 * @route '/guru/{guru}'
 */
        updateForm.put = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\GuruController::destroy
 * @see app/Http/Controllers/GuruController.php:69
 * @route '/guru/{guru}'
 */
export const destroy = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/guru/{guru}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GuruController::destroy
 * @see app/Http/Controllers/GuruController.php:69
 * @route '/guru/{guru}'
 */
destroy.url = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guru: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { guru: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    guru: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        guru: typeof args.guru === 'object'
                ? args.guru.id
                : args.guru,
                }

    return destroy.definition.url
            .replace('{guru}', parsedArgs.guru.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuruController::destroy
 * @see app/Http/Controllers/GuruController.php:69
 * @route '/guru/{guru}'
 */
destroy.delete = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\GuruController::destroy
 * @see app/Http/Controllers/GuruController.php:69
 * @route '/guru/{guru}'
 */
    const destroyForm = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GuruController::destroy
 * @see app/Http/Controllers/GuruController.php:69
 * @route '/guru/{guru}'
 */
        destroyForm.delete = (args: { guru: number | { id: number } } | [guru: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const GuruController = { index, store, update, destroy }

export default GuruController