drop table if exists product cascade;
CREATE TABLE `product` (
                           `id` bigint NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) NOT NULL,
                           `picture_url` varchar(255) DEFAULT NULL,
                           `price` double DEFAULT NULL,
                           `stock` bigint DEFAULT NULL,
                           PRIMARY KEY (`id`)
)
