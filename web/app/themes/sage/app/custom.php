<?php

namespace App;

function my_custom_dashboard_widget() {
    $persons = get_field('Persons', 'options'); // Replace 'persons' with the name of your ACF field

    if ($persons) {
        echo '<ul>';

        foreach ($persons as $person) {
            echo '<li>' . $person['name'] . '</li>'; // Replace 'name' with the name of the field you want to display
        }

        echo '</ul>';
    } else {
        echo 'No persons found';
    }
}
function add_my_custom_dashboard_widget() {
    wp_add_dashboard_widget(
        'my_custom_widget',         // Widget ID
        'My Custom Widget',         // Widget name
        function ($err){
            echo $err;
        }
    );
}
add_action( 'wp_dashboard_setup', 'App\add_my_custom_dashboard_widget' );

?>