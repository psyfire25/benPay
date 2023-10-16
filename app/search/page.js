"use client"
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const onSearch = (event) => {
        event.preventDefault();

        const encodedSearchQ = encodeURI(searchQuery);
        router.push(`search?q=${encodedSearchQ}`);

    }

    return ( 
        <form className="flex justify-center w-2/3">
            <Input
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <Button onClick={onSearch}>Search</Button>
            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Paid</Label>
                 </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Unpaid</Label>
                </div>
            </RadioGroup>
        </form>
    )
}

export default SearchInput;