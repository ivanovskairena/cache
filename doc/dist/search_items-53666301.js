searchNodes=[{"doc":"The Cache module is an implementation of a periodic self-rehydrating TTL cache that handles expensive data processing ahead of time for fast access. The cache generates 0-arity functions that store inbound data and each function is registered under a unique key along with a TTL (time to live). Child processes are assigned to compute the functions at set intervals and store the results. The cache is expected to provide the most recently computed value whenever the get/1 function is called. This cache is optimized for concurrent read/write, and child processes are linked to a chain of supervisors to ensure stability with data-processing workers that are resilient to runtime exceptions. This cache is useful for input data that is high-frequency and fast-changing, and data that requires expensive processing. Feature Critical tasks are executed concurrently ensuring quality performance without race conditions. Child processes are free from their parent. Instead, they are linked to a chain of supervisors to the main application-- ensuring application-wide stability with data-processing workers resilient to runtime exceptions. Storage is optimized for concurrent read/write. Use Case Input data is high-frequency fast-changing queries. Data requires processing that is expensive to compute, therefore, data processing must start and be completed before it is needed, not when it is being requested for. Data is not frequently accessed, but fast access is guaranteed when needed. Test-Run Utility See Cache.Weather","ref":"Cache.html","title":"Cache","type":"module"},{"doc":"get/1 Retrieve the value for a specified key from the cache. If key exists in the cache and initial data associated with key is available, {:ok, data} is returned. If data-prccessing is in progress on first-run hence the data associated with key has not been stored, then {:busy, reason} is returned. If key is not present in the cache, {:error, reason} is returned. Note: Client application calling Cache.get(key) should be responsible for implementing a polling function with a timeout mechanism. While this may be rarely needed, it should be available in cases where the requested data does not yet exist in the cache on initial run.","ref":"Cache.html#get/1","title":"Cache.get/1","type":"function"},{"doc":"Add new or update existing value with its ttl in the cache under key . ttl value is expected to be greater than the refresh_interval (see Cache.Manager configuration). It is recommended that ttl value is divisible by the refresh_interval . if ttl is not given, it defaults to 36_000 seconds(1 hour). ttl should be specified in seconds, either in integer or decimal . The provided value will convert to milliseconds internally. Cache . store ( &quot;KRP&quot; , %{ } , 10 ) # internal conversion #=&gt; Store.sec_to_ms(10) == 10_000 #=&gt; true Cache . store ( &quot;KRP&quot; , %{ } , 10.50 ) # internal conversion #=&gt; Store.sec_to_ms(10.50) == 10_500 #=&gt; true # when ttl is not specified... Cache . store ( &quot;KRP&quot; , %{ } ) # internal conversion #=&gt; Store.sec_to_ms(3_600) #=&gt; 3_600_000","ref":"Cache.html#store/3","title":"Cache.store/3","type":"function"},{"doc":"","ref":"Cache.html#t:get_returns/0","title":"Cache.get_returns/0","type":"type"},{"doc":"","ref":"Cache.Mailer.html","title":"Cache.Mailer","type":"module"},{"doc":"","ref":"Cache.Mailer.html#deliver/2","title":"Cache.Mailer.deliver/2","type":"function"},{"doc":"","ref":"Cache.Mailer.html#deliver!/2","title":"Cache.Mailer.deliver!/2","type":"function"},{"doc":"","ref":"Cache.Mailer.html#deliver_many/2","title":"Cache.Mailer.deliver_many/2","type":"function"},{"doc":"","ref":"Cache.Repo.html","title":"Cache.Repo","type":"module"},{"doc":"Callback implementation for Ecto.Repo.aggregate/3 .","ref":"Cache.Repo.html#aggregate/3","title":"Cache.Repo.aggregate/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.aggregate/4 .","ref":"Cache.Repo.html#aggregate/4","title":"Cache.Repo.aggregate/4","type":"function"},{"doc":"Callback implementation for Ecto.Repo.all/2 .","ref":"Cache.Repo.html#all/2","title":"Cache.Repo.all/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.checked_out?/0 .","ref":"Cache.Repo.html#checked_out?/0","title":"Cache.Repo.checked_out?/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.checkout/2 .","ref":"Cache.Repo.html#checkout/2","title":"Cache.Repo.checkout/2","type":"function"},{"doc":"","ref":"Cache.Repo.html#child_spec/1","title":"Cache.Repo.child_spec/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.config/0 .","ref":"Cache.Repo.html#config/0","title":"Cache.Repo.config/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.default_options/1 .","ref":"Cache.Repo.html#default_options/1","title":"Cache.Repo.default_options/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete/2 .","ref":"Cache.Repo.html#delete/2","title":"Cache.Repo.delete/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete!/2 .","ref":"Cache.Repo.html#delete!/2","title":"Cache.Repo.delete!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete_all/2 .","ref":"Cache.Repo.html#delete_all/2","title":"Cache.Repo.delete_all/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that forces all connections in the pool to disconnect within the given interval. See Ecto.Adapters.SQL.disconnect_all/3 for more information.","ref":"Cache.Repo.html#disconnect_all/2","title":"Cache.Repo.disconnect_all/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.exists?/2 .","ref":"Cache.Repo.html#exists?/2","title":"Cache.Repo.exists?/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query. See Ecto.Adapters.SQL.explain/4 for more information.","ref":"Cache.Repo.html#explain/3","title":"Cache.Repo.explain/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get/3 .","ref":"Cache.Repo.html#get/3","title":"Cache.Repo.get/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get!/3 .","ref":"Cache.Repo.html#get!/3","title":"Cache.Repo.get!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_by/3 .","ref":"Cache.Repo.html#get_by/3","title":"Cache.Repo.get_by/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_by!/3 .","ref":"Cache.Repo.html#get_by!/3","title":"Cache.Repo.get_by!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_dynamic_repo/0 .","ref":"Cache.Repo.html#get_dynamic_repo/0","title":"Cache.Repo.get_dynamic_repo/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.in_transaction?/0 .","ref":"Cache.Repo.html#in_transaction?/0","title":"Cache.Repo.in_transaction?/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert/2 .","ref":"Cache.Repo.html#insert/2","title":"Cache.Repo.insert/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert!/2 .","ref":"Cache.Repo.html#insert!/2","title":"Cache.Repo.insert!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_all/3 .","ref":"Cache.Repo.html#insert_all/3","title":"Cache.Repo.insert_all/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_or_update/2 .","ref":"Cache.Repo.html#insert_or_update/2","title":"Cache.Repo.insert_or_update/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_or_update!/2 .","ref":"Cache.Repo.html#insert_or_update!/2","title":"Cache.Repo.insert_or_update!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.load/2 .","ref":"Cache.Repo.html#load/2","title":"Cache.Repo.load/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.one/2 .","ref":"Cache.Repo.html#one/2","title":"Cache.Repo.one/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.one!/2 .","ref":"Cache.Repo.html#one!/2","title":"Cache.Repo.one!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.preload/3 .","ref":"Cache.Repo.html#preload/3","title":"Cache.Repo.preload/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.prepare_query/3 .","ref":"Cache.Repo.html#prepare_query/3","title":"Cache.Repo.prepare_query/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.put_dynamic_repo/1 .","ref":"Cache.Repo.html#put_dynamic_repo/1","title":"Cache.Repo.put_dynamic_repo/1","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given query. See Ecto.Adapters.SQL.query/4 for more information.","ref":"Cache.Repo.html#query/3","title":"Cache.Repo.query/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given query. See Ecto.Adapters.SQL.query!/4 for more information.","ref":"Cache.Repo.html#query!/3","title":"Cache.Repo.query!/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given multi-result query. See Ecto.Adapters.SQL.query_many/4 for more information.","ref":"Cache.Repo.html#query_many/3","title":"Cache.Repo.query_many/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given multi-result query. See Ecto.Adapters.SQL.query_many!/4 for more information.","ref":"Cache.Repo.html#query_many!/3","title":"Cache.Repo.query_many!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.reload/2 .","ref":"Cache.Repo.html#reload/2","title":"Cache.Repo.reload/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.reload!/2 .","ref":"Cache.Repo.html#reload!/2","title":"Cache.Repo.reload!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.rollback/1 .","ref":"Cache.Repo.html#rollback/1","title":"Cache.Repo.rollback/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.start_link/1 .","ref":"Cache.Repo.html#start_link/1","title":"Cache.Repo.start_link/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.stop/1 .","ref":"Cache.Repo.html#stop/1","title":"Cache.Repo.stop/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.stream/2 .","ref":"Cache.Repo.html#stream/2","title":"Cache.Repo.stream/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that translates the given query to SQL. See Ecto.Adapters.SQL.to_sql/3 for more information.","ref":"Cache.Repo.html#to_sql/2","title":"Cache.Repo.to_sql/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.transaction/2 .","ref":"Cache.Repo.html#transaction/2","title":"Cache.Repo.transaction/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update/2 .","ref":"Cache.Repo.html#update/2","title":"Cache.Repo.update/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update!/2 .","ref":"Cache.Repo.html#update!/2","title":"Cache.Repo.update!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update_all/3 .","ref":"Cache.Repo.html#update_all/3","title":"Cache.Repo.update_all/3","type":"function"},{"doc":"The entrypoint for defining your web interface, such as controllers, views, channels and so on. This can be used in your application as: use CacheWeb , :controller use CacheWeb , :view The definitions below will be executed for every view, controller, etc, so keep them short and clean, focused on imports, uses and aliases. Do NOT define functions inside the quoted expressions below. Instead, define any helper function in modules and import those modules here.","ref":"CacheWeb.html","title":"CacheWeb","type":"module"},{"doc":"When used, dispatch to the appropriate controller/view/etc.","ref":"CacheWeb.html#__using__/1","title":"CacheWeb.__using__/1","type":"macro"},{"doc":"","ref":"CacheWeb.html#channel/0","title":"CacheWeb.channel/0","type":"function"},{"doc":"","ref":"CacheWeb.html#component/0","title":"CacheWeb.component/0","type":"function"},{"doc":"","ref":"CacheWeb.html#controller/0","title":"CacheWeb.controller/0","type":"function"},{"doc":"","ref":"CacheWeb.html#live_component/0","title":"CacheWeb.live_component/0","type":"function"},{"doc":"","ref":"CacheWeb.html#live_view/0","title":"CacheWeb.live_view/0","type":"function"},{"doc":"","ref":"CacheWeb.html#router/0","title":"CacheWeb.router/0","type":"function"},{"doc":"","ref":"CacheWeb.html#view/0","title":"CacheWeb.view/0","type":"function"},{"doc":"","ref":"CacheWeb.Endpoint.html","title":"CacheWeb.Endpoint","type":"module"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast/3 .","ref":"CacheWeb.Endpoint.html#broadcast/3","title":"CacheWeb.Endpoint.broadcast/3","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast!/3 .","ref":"CacheWeb.Endpoint.html#broadcast!/3","title":"CacheWeb.Endpoint.broadcast!/3","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast_from/4 .","ref":"CacheWeb.Endpoint.html#broadcast_from/4","title":"CacheWeb.Endpoint.broadcast_from/4","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast_from!/4 .","ref":"CacheWeb.Endpoint.html#broadcast_from!/4","title":"CacheWeb.Endpoint.broadcast_from!/4","type":"function"},{"doc":"Callback implementation for Plug.call/2 .","ref":"CacheWeb.Endpoint.html#call/2","title":"CacheWeb.Endpoint.call/2","type":"function"},{"doc":"Returns the child specification to start the endpoint under a supervision tree.","ref":"CacheWeb.Endpoint.html#child_spec/1","title":"CacheWeb.Endpoint.child_spec/1","type":"function"},{"doc":"Returns the endpoint configuration for key Returns default if the key does not exist.","ref":"CacheWeb.Endpoint.html#config/2","title":"CacheWeb.Endpoint.config/2","type":"function"},{"doc":"Reloads the configuration given the application environment changes.","ref":"CacheWeb.Endpoint.html#config_change/2","title":"CacheWeb.Endpoint.config_change/2","type":"function"},{"doc":"Returns the host for the given endpoint.","ref":"CacheWeb.Endpoint.html#host/0","title":"CacheWeb.Endpoint.host/0","type":"function"},{"doc":"Callback implementation for Plug.init/1 .","ref":"CacheWeb.Endpoint.html#init/1","title":"CacheWeb.Endpoint.init/1","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.local_broadcast/3 .","ref":"CacheWeb.Endpoint.html#local_broadcast/3","title":"CacheWeb.Endpoint.local_broadcast/3","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.local_broadcast_from/4 .","ref":"CacheWeb.Endpoint.html#local_broadcast_from/4","title":"CacheWeb.Endpoint.local_broadcast_from/4","type":"function"},{"doc":"Generates the path information when routing to this endpoint.","ref":"CacheWeb.Endpoint.html#path/1","title":"CacheWeb.Endpoint.path/1","type":"function"},{"doc":"Generates the script name.","ref":"CacheWeb.Endpoint.html#script_name/0","title":"CacheWeb.Endpoint.script_name/0","type":"function"},{"doc":"Starts the endpoint supervision tree. Options :log_access_url - if the access url should be logged once the endpoint starts All other options are merged into the endpoint configuration.","ref":"CacheWeb.Endpoint.html#start_link/1","title":"CacheWeb.Endpoint.start_link/1","type":"function"},{"doc":"Generates a base64-encoded cryptographic hash (sha512) to a static file in priv/static . Meant to be used for Subresource Integrity with CDNs.","ref":"CacheWeb.Endpoint.html#static_integrity/1","title":"CacheWeb.Endpoint.static_integrity/1","type":"function"},{"doc":"Returns a two item tuple with the first item being the static_path and the second item being the static_integrity .","ref":"CacheWeb.Endpoint.html#static_lookup/1","title":"CacheWeb.Endpoint.static_lookup/1","type":"function"},{"doc":"Generates a route to a static file in priv/static .","ref":"CacheWeb.Endpoint.html#static_path/1","title":"CacheWeb.Endpoint.static_path/1","type":"function"},{"doc":"Generates the static URL without any path information. It uses the configuration under :static_url to generate such. It falls back to :url if :static_url is not set.","ref":"CacheWeb.Endpoint.html#static_url/0","title":"CacheWeb.Endpoint.static_url/0","type":"function"},{"doc":"Generates the endpoint base URL but as a URI struct. It uses the configuration under :url to generate such. Useful for manipulating the URL data and passing it to URL helpers.","ref":"CacheWeb.Endpoint.html#struct_url/0","title":"CacheWeb.Endpoint.struct_url/0","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.subscribe/2 .","ref":"CacheWeb.Endpoint.html#subscribe/2","title":"CacheWeb.Endpoint.subscribe/2","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.unsubscribe/1 .","ref":"CacheWeb.Endpoint.html#unsubscribe/1","title":"CacheWeb.Endpoint.unsubscribe/1","type":"function"},{"doc":"Generates the endpoint base URL without any path information. It uses the configuration under :url to generate such.","ref":"CacheWeb.Endpoint.html#url/0","title":"CacheWeb.Endpoint.url/0","type":"function"},{"doc":"Conveniences for translating and building error messages.","ref":"CacheWeb.ErrorHelpers.html","title":"CacheWeb.ErrorHelpers","type":"module"},{"doc":"Generates tag for inlined form input errors.","ref":"CacheWeb.ErrorHelpers.html#error_tag/2","title":"CacheWeb.ErrorHelpers.error_tag/2","type":"function"},{"doc":"Translates an error message using gettext.","ref":"CacheWeb.ErrorHelpers.html#translate_error/1","title":"CacheWeb.ErrorHelpers.translate_error/1","type":"function"},{"doc":"","ref":"CacheWeb.ErrorView.html","title":"CacheWeb.ErrorView","type":"module"},{"doc":"The resource name, as an atom, for this view","ref":"CacheWeb.ErrorView.html#__resource__/0","title":"CacheWeb.ErrorView.__resource__/0","type":"function"},{"doc":"Renders the given template locally.","ref":"CacheWeb.ErrorView.html#render/2","title":"CacheWeb.ErrorView.render/2","type":"function"},{"doc":"Callback invoked when no template is found. By default it raises but can be customized to render a particular template.","ref":"CacheWeb.ErrorView.html#template_not_found/2","title":"CacheWeb.ErrorView.template_not_found/2","type":"function"},{"doc":"A module providing Internationalization with a gettext-based API. By using Gettext , your module gains a set of macros for translations, for example: import CacheWeb.Gettext # Simple translation gettext ( &quot;Here is the string to translate&quot; ) # Plural translation ngettext ( &quot;Here is the string to translate&quot; , &quot;Here are the strings to translate&quot; , 3 ) # Domain-based translation dgettext ( &quot;errors&quot; , &quot;Here is the error message to translate&quot; ) See the Gettext Docs for detailed usage.","ref":"CacheWeb.Gettext.html","title":"CacheWeb.Gettext","type":"module"},{"doc":"Callback implementation for Gettext.Backend.dgettext/3 .","ref":"CacheWeb.Gettext.html#dgettext/3","title":"CacheWeb.Gettext.dgettext/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dgettext_noop/2 .","ref":"CacheWeb.Gettext.html#dgettext_noop/2","title":"CacheWeb.Gettext.dgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext/5 .","ref":"CacheWeb.Gettext.html#dngettext/5","title":"CacheWeb.Gettext.dngettext/5","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext_noop/3 .","ref":"CacheWeb.Gettext.html#dngettext_noop/3","title":"CacheWeb.Gettext.dngettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpgettext/4 .","ref":"CacheWeb.Gettext.html#dpgettext/4","title":"CacheWeb.Gettext.dpgettext/4","type":"macro"},{"doc":"","ref":"CacheWeb.Gettext.html#dpgettext_noop/3","title":"CacheWeb.Gettext.dpgettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpngettext/6 .","ref":"CacheWeb.Gettext.html#dpngettext/6","title":"CacheWeb.Gettext.dpngettext/6","type":"macro"},{"doc":"","ref":"CacheWeb.Gettext.html#dpngettext_noop/4","title":"CacheWeb.Gettext.dpngettext_noop/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext/2 .","ref":"CacheWeb.Gettext.html#gettext/2","title":"CacheWeb.Gettext.gettext/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_comment/1 .","ref":"CacheWeb.Gettext.html#gettext_comment/1","title":"CacheWeb.Gettext.gettext_comment/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_noop/1 .","ref":"CacheWeb.Gettext.html#gettext_noop/1","title":"CacheWeb.Gettext.gettext_noop/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_bindings/2 .","ref":"CacheWeb.Gettext.html#handle_missing_bindings/2","title":"CacheWeb.Gettext.handle_missing_bindings/2","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_plural_translation/7 .","ref":"CacheWeb.Gettext.html#handle_missing_plural_translation/7","title":"CacheWeb.Gettext.handle_missing_plural_translation/7","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_translation/5 .","ref":"CacheWeb.Gettext.html#handle_missing_translation/5","title":"CacheWeb.Gettext.handle_missing_translation/5","type":"function"},{"doc":"","ref":"CacheWeb.Gettext.html#lgettext/5","title":"CacheWeb.Gettext.lgettext/5","type":"function"},{"doc":"","ref":"CacheWeb.Gettext.html#lngettext/7","title":"CacheWeb.Gettext.lngettext/7","type":"function"},{"doc":"Callback implementation for Gettext.Backend.ngettext/4 .","ref":"CacheWeb.Gettext.html#ngettext/4","title":"CacheWeb.Gettext.ngettext/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.ngettext_noop/2 .","ref":"CacheWeb.Gettext.html#ngettext_noop/2","title":"CacheWeb.Gettext.ngettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pgettext/3 .","ref":"CacheWeb.Gettext.html#pgettext/3","title":"CacheWeb.Gettext.pgettext/3","type":"macro"},{"doc":"","ref":"CacheWeb.Gettext.html#pgettext_noop/2","title":"CacheWeb.Gettext.pgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pngettext/5 .","ref":"CacheWeb.Gettext.html#pngettext/5","title":"CacheWeb.Gettext.pngettext/5","type":"macro"},{"doc":"","ref":"CacheWeb.Gettext.html#pngettext_noop/3","title":"CacheWeb.Gettext.pngettext_noop/3","type":"macro"},{"doc":"","ref":"CacheWeb.LayoutView.html","title":"CacheWeb.LayoutView","type":"module"},{"doc":"The resource name, as an atom, for this view","ref":"CacheWeb.LayoutView.html#__resource__/0","title":"CacheWeb.LayoutView.__resource__/0","type":"function"},{"doc":"","ref":"CacheWeb.LayoutView.html#app.html/1","title":"CacheWeb.LayoutView.app.html/1","type":"function"},{"doc":"","ref":"CacheWeb.LayoutView.html#live.html/1","title":"CacheWeb.LayoutView.live.html/1","type":"function"},{"doc":"Renders the given template locally.","ref":"CacheWeb.LayoutView.html#render/2","title":"CacheWeb.LayoutView.render/2","type":"function"},{"doc":"","ref":"CacheWeb.LayoutView.html#root.html/1","title":"CacheWeb.LayoutView.root.html/1","type":"function"},{"doc":"Callback invoked when no template is found. By default it raises but can be customized to render a particular template.","ref":"CacheWeb.LayoutView.html#template_not_found/2","title":"CacheWeb.LayoutView.template_not_found/2","type":"function"},{"doc":"","ref":"CacheWeb.PageController.html","title":"CacheWeb.PageController","type":"module"},{"doc":"","ref":"CacheWeb.PageController.html#index/2","title":"CacheWeb.PageController.index/2","type":"function"},{"doc":"","ref":"CacheWeb.PageController.html#manager/2","title":"CacheWeb.PageController.manager/2","type":"function"},{"doc":"","ref":"CacheWeb.PageController.html#store/2","title":"CacheWeb.PageController.store/2","type":"function"},{"doc":"","ref":"CacheWeb.PageController.html#weather/2","title":"CacheWeb.PageController.weather/2","type":"function"},{"doc":"","ref":"CacheWeb.PageController.html#worker/2","title":"CacheWeb.PageController.worker/2","type":"function"},{"doc":"","ref":"CacheWeb.PageController.html#worker_visor/2","title":"CacheWeb.PageController.worker_visor/2","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html","title":"CacheWeb.PageView","type":"module"},{"doc":"The resource name, as an atom, for this view","ref":"CacheWeb.PageView.html#__resource__/0","title":"CacheWeb.PageView.__resource__/0","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html#index.html/1","title":"CacheWeb.PageView.index.html/1","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html#manager.html/1","title":"CacheWeb.PageView.manager.html/1","type":"function"},{"doc":"Renders the given template locally.","ref":"CacheWeb.PageView.html#render/2","title":"CacheWeb.PageView.render/2","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html#store.html/1","title":"CacheWeb.PageView.store.html/1","type":"function"},{"doc":"Callback invoked when no template is found. By default it raises but can be customized to render a particular template.","ref":"CacheWeb.PageView.html#template_not_found/2","title":"CacheWeb.PageView.template_not_found/2","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html#weather.html/1","title":"CacheWeb.PageView.weather.html/1","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html#worker.html/1","title":"CacheWeb.PageView.worker.html/1","type":"function"},{"doc":"","ref":"CacheWeb.PageView.html#worker_visor.html/1","title":"CacheWeb.PageView.worker_visor.html/1","type":"function"},{"doc":"","ref":"CacheWeb.Router.html","title":"CacheWeb.Router","type":"module"},{"doc":"","ref":"CacheWeb.Router.html#api/2","title":"CacheWeb.Router.api/2","type":"function"},{"doc":"","ref":"CacheWeb.Router.html#browser/2","title":"CacheWeb.Router.browser/2","type":"function"},{"doc":"Callback invoked by Plug on every request.","ref":"CacheWeb.Router.html#call/2","title":"CacheWeb.Router.call/2","type":"function"},{"doc":"Callback required by Plug that initializes the router for serving web requests.","ref":"CacheWeb.Router.html#init/1","title":"CacheWeb.Router.init/1","type":"function"},{"doc":"Module with named helpers generated from CacheWeb.Router.","ref":"CacheWeb.Router.Helpers.html","title":"CacheWeb.Router.Helpers","type":"module"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_path/2","title":"CacheWeb.Router.Helpers.live_dashboard_path/2","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_path/3","title":"CacheWeb.Router.Helpers.live_dashboard_path/3","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_path/4","title":"CacheWeb.Router.Helpers.live_dashboard_path/4","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_path/5","title":"CacheWeb.Router.Helpers.live_dashboard_path/5","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_url/2","title":"CacheWeb.Router.Helpers.live_dashboard_url/2","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_url/3","title":"CacheWeb.Router.Helpers.live_dashboard_url/3","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_url/4","title":"CacheWeb.Router.Helpers.live_dashboard_url/4","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#live_dashboard_url/5","title":"CacheWeb.Router.Helpers.live_dashboard_url/5","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#page_path/2","title":"CacheWeb.Router.Helpers.page_path/2","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#page_path/3","title":"CacheWeb.Router.Helpers.page_path/3","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#page_url/2","title":"CacheWeb.Router.Helpers.page_url/2","type":"function"},{"doc":"","ref":"CacheWeb.Router.Helpers.html#page_url/3","title":"CacheWeb.Router.Helpers.page_url/3","type":"function"},{"doc":"Generates the path information including any necessary prefix.","ref":"CacheWeb.Router.Helpers.html#path/2","title":"CacheWeb.Router.Helpers.path/2","type":"function"},{"doc":"Generates an integrity hash to a static asset given its file path.","ref":"CacheWeb.Router.Helpers.html#static_integrity/2","title":"CacheWeb.Router.Helpers.static_integrity/2","type":"function"},{"doc":"Generates path to a static asset given its file path.","ref":"CacheWeb.Router.Helpers.html#static_path/2","title":"CacheWeb.Router.Helpers.static_path/2","type":"function"},{"doc":"Generates url to a static asset given its file path.","ref":"CacheWeb.Router.Helpers.html#static_url/2","title":"CacheWeb.Router.Helpers.static_url/2","type":"function"},{"doc":"Generates the connection/endpoint base URL without any path information.","ref":"CacheWeb.Router.Helpers.html#url/1","title":"CacheWeb.Router.Helpers.url/1","type":"function"},{"doc":"","ref":"CacheWeb.Telemetry.html","title":"CacheWeb.Telemetry","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"CacheWeb.Telemetry.html#child_spec/1","title":"CacheWeb.Telemetry.child_spec/1","type":"function"},{"doc":"","ref":"CacheWeb.Telemetry.html#metrics/0","title":"CacheWeb.Telemetry.metrics/0","type":"function"},{"doc":"","ref":"CacheWeb.Telemetry.html#start_link/1","title":"CacheWeb.Telemetry.start_link/1","type":"function"}]