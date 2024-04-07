CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `codigo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`, `codigo`) VALUES
(1, 'AHUACHAPAN', 'AH'),
(2, 'SANTA ANA', 'SA'),
(3, 'SONSONATE', 'SO'),
(4, 'CHALATENANGO', 'CH'),
(5, 'LA LIBERTAD', 'LL'),
(6, 'SAN SALVADOR', 'SS'),
(7, 'CUSCATLAN', 'CU'),
(8, 'LA PAZ', 'LP'),
(9, 'CABANAS', 'CA'),
(10, 'SAN VICENTE', 'SV'),
(11, 'USULUTAN', 'US'),
(12, 'SAN MIGUEL', 'SM'),
(13, 'MORAZAN', 'MO'),
(14, 'LA UNION', 'LU');