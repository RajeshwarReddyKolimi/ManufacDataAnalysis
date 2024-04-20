import { Table, TableScrollContainer } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

function CustomTable({
    title,
    headerArray,
    meanArray,
    medianArray,
    modeArray,
}) {
    return (
        <TableScrollContainer minWidth="auto">
            <h3>Class-wise mean, median, mode of {title}</h3>
            <Table
                horizontalSpacing="sm"
                withTableBorder={true}
                withColumnBorders={true}
                highlightOnHover={true}
                striped="odd"
            >
                <Table.Thead>
                    <Table.Tr>
                        {headerArray?.map((header, id) => (
                            <Table.Th key={id}>{header}</Table.Th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Th>{title} Mean</Table.Th>
                        {meanArray?.map((mean, id) => (
                            <Table.Td key={id}>{mean}</Table.Td>
                        ))}
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Th>{title} Median</Table.Th>
                        {medianArray?.map((median, id) => (
                            <Table.Td key={id}>{median}</Table.Td>
                        ))}
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Th>{title} Mode</Table.Th>
                        {modeArray?.map((mode, id) => (
                            <Table.Td key={id}>{mode}</Table.Td>
                        ))}
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </TableScrollContainer>
    );
}

export default CustomTable;
