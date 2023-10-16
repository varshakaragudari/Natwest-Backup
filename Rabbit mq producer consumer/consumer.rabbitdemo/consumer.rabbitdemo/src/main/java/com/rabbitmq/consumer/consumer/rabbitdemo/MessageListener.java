package com.rabbitmq.consumer.consumer.rabbitdemo;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class MessageListener {

    @RabbitListener(queues = MQConfig.QUEUE)//very imp
    public void listener(CustomMessage message) {
        System.out.println(message);
    }

}