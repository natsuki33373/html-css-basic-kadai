<?php

class Food {
    public $name;
    public $price;

    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    public function show_price() {
        echo "The price is " . $this->price . "\n";
    }
}

class Animal {
    public $name;
    public $height;
    public $weight;

    public function __construct($name, $height, $weight) {
        $this->name = $name;
        $this->height = $height;
        $this->weight = $weight;
    }

    public function show_height() {
        echo "The height is " . $this->height . "\n";
    }
}

$apple = new Food("Apple", 100);
$tiger = new Animal("Tiger", 100, 200);

print_r($apple);
print_r($tiger);

$apple->show_price();
$tiger->show_height();
?>