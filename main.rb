class Dog 
    def legs 
        legs = 4 
        arms = 5

        return legs + arms
    end
    def sound size
        if size === 'big'
            puts "GRR WOOF"
        elsif size === 'small' 
            puts 'woof' 
        else 
            puts "that's not a dog"
        end 
    end 
    def feed items 
        for item in items do 
            puts item
        end
    end
end 
doggo = Dog.new 

puts doggo.sound('small')
puts doggo.feed(['waffle', 'dog food'])
