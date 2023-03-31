<?php
use PostTypes\PostType;
use PostTypes\Taxonomy;

if (!is_blog_installed()) {
    return;
}

/**
 * Register custom post types and taxonomies with WP.
 *
 * @see https://github.com/jjgrainger/PostTypes
 * @see https://developer.wordpress.org/resource/dashicons/
 */
class PostTypes
{
    private static $instance = null;

    /** @var array */
    public $postTypes = [];

    public static function getInstance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function __construct()
    {
        add_action('plugins_loaded', [$this, 'register'], 9);
        add_action('admin_head', [$this, 'adminHead']);
    }

    /**
     * Register all post types and their taxonomies.
     * @note needs to run during `init`.
     */
    public function register()
    {
        $this->postTypes[] = $this->registerPost();
        //$this->postTypes[] = $this->registerPage();
        $this->postTypes[] = $this->registerCompany();
        $this->postTypes[] = $this->registerMenus();
        $this->postTypes[] = $this->registerPerson();
        //$this->postTypes[] = $this->registerCourse();
    }

    public function registerPost()
    {
        $type = new PostType('post');
        $type->taxonomy('service');
        $type->register();

        // Set `has_archive` for compatibility with `post-type-archive-mapping`.
        add_filter('register_post_type_args', function ($args, $post_type) {
            if ($post_type === 'post') {
                $args['has_archive'] = true;
                $args['rewrite'] = [
                    'with_front' => true,
                ];
            }
            return $args;
        }, 10, 2);

        return $type;
    }

    public function registerPage()
    {
        $page = new PostType('page');
        $page->register();

        add_action('init', function () {
            add_post_type_support('page', 'excerpt');
        });

        return $page;
    }

    public function registerCompany()
    {
        $type = new PostType('company', [
            'labels' => [
                'name' => 'Companies',
                'singular_name' => 'Company',
            ],
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => ['title', 'thumbnail', 'revisions', 'excerpt', 'editor', 'custom-fields'],
            'rewrite' => [
                'slug' => 'company',
                'with_front' => false,
            ],
        ]);

        $type->icon('dashicons-analytics');
        $type->taxonomy(['service', 'client']);
        $type->register();

        $service = new Taxonomy('service', [
            'show_in_rest' => true,
            'rewrite' => [
                'slug' => 'service',
                'with_front' => false,
                'hierarchical' => true,
            ],
        ]);
        $service->posttype(['company']);
        $service->register();

        $client = new Taxonomy('client', [
            'show_in_rest' => true,
            'rewrite' => [
                'slug' => 'client',
                'with_front' => false,
                'hierarchical' => true,
            ],
        ]);
        $client->posttype(['company']);
        $client->register();

        return $type;
    }
    public function registerMenus()
{
    $type = new PostType('menu', [
        'supports' => ['title', 'thumbnail', 'revisions', 'excerpt', 'editor', 'custom-fields'],
        'menu_icon' => 'dashicons-menu',
        'show_in_rest' => true,
        'public' => true,
        'labels' => [
            'name' => __('Menus', 'text-domain'),
            'singular_name' => __('Menu', 'text-domain'),
            'menu_name' => __('Menus', 'text-domain'),
            'add_new_item' => __('Add New Menu', 'text-domain'),
            'edit_item' => __('Edit Menu', 'text-domain'),
            'new_item' => __('New Menu', 'text-domain'),
            'view_item' => __('View Menu', 'text-domain'),
            'search_items' => __('Search Menus', 'text-domain'),
            'not_found' => __('No Menus found', 'text-domain'),
            'not_found_in_trash' => __('No Menus found in Trash', 'text-domain'),
            'all_items' => __('All Menus', 'text-domain'),
        ],
    ]);
    $type->taxonomy('menu_category');
    $type->register();
    add_filter('register_post_type_args', function ($args, $post_type) {
        if ($post_type === 'menu') {
            $args['has_archive'] = true;
            $args['rewrite'] = [
                'with_front' => true,
            ];
        }
        return $args;
    }, 10, 2);

    return $type;
}
    public function registerPerson()
    {
        $person = new PostType('person', [
            'has_archive' => false,
            'show_in_rest' => true,
            'public' => false,
            'show_ui' => true,
            'show_in_menu' => true,
            'supports' => ['title', 'thumbnail'],
        ]);
        $person->icon('dashicons-admin-users');
        $person->taxonomy('department');
        $person->columns()
            ->add(['thumbnail' => ''])
            ->order(['thumbnail' => 1])
            ->populate('thumbnail', function ($column, $post_id) {
                echo get_the_post_thumbnail($post_id, 'thumbnail');
            });
        $person->register();

        $department = new Taxonomy('department');
        $department->register();

        return $person;
    }

    public function registerCourse()
    {
        $course = new PostType('course', [
            'has_archive' => false,
            'show_in_rest' => true,
            'public' => false,
            'show_ui' => true,
            'show_in_menu' => true,
            'supports' => ['title', 'thumbnail'],
        ]);
        $course->icon('dashicons-welcome-learn-more');
        $course->columns()
            ->add(['thumbnail' => ''])
            ->order(['thumbnail' => 1])
            ->populate('thumbnail', function ($column, $post_id) {
                echo get_the_post_thumbnail($post_id, 'thumbnail');
            });
        $course->register();
        return $course;
    }

    public function adminHead()
    {
        echo '<style>
            .wp-list-table th.column-thumbnail { width: 28px; }
            .wp-list-table td.column-thumbnail img {
                max-width: 37px;
                max-height: 37px;
                width: auto;
                height: auto;
            }
        </style>';
    }
}

PostTypes::getInstance();