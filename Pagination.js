<div className="pagination w-full px-4 py-6">
    <div className="relative bg-white">
        {products.prev_page_url && (
            <Link
                href={{
                    pathname: '/products',
                    query: { ...router.query, page: (products.current_page - 1)}
                }}
                >
                <a
                    className="absolute items-center flex h-full top-0 left-0 text-blue-500 whitespace-nowrap hover:text-blue-900"
                    >
                    <ChevronLeftIcon className="inline-block h-6 w-6" aria-hidden="true" />
                    <span className="inline-block">Previous</span>
                </a>
            </Link>
        )}
        <div className="block text-center">
            {products.links.slice(1, -1).map((link, index) => {
                if(link.url){
                    return (
                        <Link
                            key={index}
                            href={{
                                pathname: '/products',
                                query: { ...router.query, page: link.label }
                            }}
                            >
                            <a
                                className={`
                                    ${router.query.page == link.label ? 'text-black' : (products.links.length != 3) ? (!router.query.page && (index == 0)) ? 'text-black' : '' : 'text-black'}
                                    items-center py-1 px-2 rounded mx-1 h-full text-blue-500 whitespace-nowrap hover:bg-blue-500 hover:text-white`
                                }
                                >
                                <span className="inline-block">{link.label}</span>
                            </a>
                        </Link>
                    )
                }
                else{
                    return (
                        <span key={"span"+index} className={"items-center py-1 px-2 rounded mx-1 h-full  text-blue-500 whitespace-nowrap inline-block"}>...</span>
                    )
                }

            })}
        </div>
        {products.next_page_url &&(
            <Link
                href={{
                    pathname: '/products',
                    query: { ...router.query, page: (products.current_page + 1) }
                }}
                >
                <a
                    className="absolute items-center flex h-full top-0 right-0 text-blue-500 hover:text-blue-900 whitespace-nowrap"
                    >
                    <span className="inline-block">Next</span>
                    <ChevronRightIcon className="inline-block h-6 w-6" aria-hidden="true" />
                </a>
            </Link>
        )}

    </div>
</div>
