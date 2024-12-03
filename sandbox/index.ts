import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    // await client.hSet('car',{
    //     color : 'red',
    //     model : 2020,
    //     engine : {cylinders : 8},
    //     owner :  ''  // do not assign the null here becuase node-redis try to convert it to .toString() method and it can't convert throws the error.
    // })
    // const car = await client.hGetAll('car#456uio')

    // if(Object.keys(car).length === 0){   //do this check, because HGETALL returns {} when there is no data for that key. just falsy check will not work
    //     console.log('the object not found...respond with 404')
    //     return
    // }
    // console.log(car)

    await client.hSet('car1', {
        color: 'red',
        model: 2020,
    })
    await client.hSet('car2', {
        color: 'green',
        model: 2022,
    })
    await client.hSet('car3', {
        color: 'yellow',
        model: 2024,
    })

    const commands = [1,2,3].map((id)=> client.hGetAll('car' + id))
    const results = await Promise.all(
        // client.hGetAll('car1'), client.hGetAll('car2'), client.hGetAll('car3')
        commands
    )

    console.log(results)
};
run();
